import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCard = ({ className, icon, title, description, value, trend, ...props }) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden group hover:shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      <motion.div
        className="relative p-6 h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/50" />

        <div className="relative z-10">
          {/* Icon and Trend */}
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
              {React.cloneElement(icon, {
                className: "h-6 w-6 text-primary",
              })}
            </div>
            {trend && (
              <div
                className={cn(
                  "flex items-center gap-1 text-sm font-medium rounded-full px-2.5 py-0.5",
                  trend.isPositive
                    ? "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-950"
                    : "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-950"
                )}
              >
                {trend.isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{trend.value}%</span>
              </div>
            )}
          </div>

          {/* Value */}
          <div className="mb-4">
            <span className="text-3xl font-bold text-foreground">{value}</span>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>

          {/* Animated Border */}
          <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    </Card>
  );
};

export { StatsCard };
